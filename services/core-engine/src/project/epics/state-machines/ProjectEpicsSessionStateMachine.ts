export type ProjectEpicsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsSessionStateMachine {
  private allowedTransitions: Record<ProjectEpicsSessionState, ProjectEpicsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsSessionState, to: ProjectEpicsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsSessionState, to: ProjectEpicsSessionState): ProjectEpicsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsSession: " + from + " -> " + to);
    }
    return to;
  }
}
