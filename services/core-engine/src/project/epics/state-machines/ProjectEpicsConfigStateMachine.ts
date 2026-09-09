export type ProjectEpicsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsConfigStateMachine {
  private allowedTransitions: Record<ProjectEpicsConfigState, ProjectEpicsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsConfigState, to: ProjectEpicsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsConfigState, to: ProjectEpicsConfigState): ProjectEpicsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
