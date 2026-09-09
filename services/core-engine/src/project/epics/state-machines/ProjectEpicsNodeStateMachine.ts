export type ProjectEpicsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsNodeStateMachine {
  private allowedTransitions: Record<ProjectEpicsNodeState, ProjectEpicsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsNodeState, to: ProjectEpicsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsNodeState, to: ProjectEpicsNodeState): ProjectEpicsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsNode: " + from + " -> " + to);
    }
    return to;
  }
}
