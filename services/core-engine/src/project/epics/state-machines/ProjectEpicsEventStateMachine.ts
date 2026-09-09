export type ProjectEpicsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsEventStateMachine {
  private allowedTransitions: Record<ProjectEpicsEventState, ProjectEpicsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsEventState, to: ProjectEpicsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsEventState, to: ProjectEpicsEventState): ProjectEpicsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
