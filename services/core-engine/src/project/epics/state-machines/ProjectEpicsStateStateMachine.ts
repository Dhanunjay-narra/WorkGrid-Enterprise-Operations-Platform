export type ProjectEpicsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsStateStateMachine {
  private allowedTransitions: Record<ProjectEpicsStateState, ProjectEpicsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsStateState, to: ProjectEpicsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsStateState, to: ProjectEpicsStateState): ProjectEpicsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsState: " + from + " -> " + to);
    }
    return to;
  }
}
