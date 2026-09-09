export type ProjectEpicsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsQueueStateMachine {
  private allowedTransitions: Record<ProjectEpicsQueueState, ProjectEpicsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsQueueState, to: ProjectEpicsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsQueueState, to: ProjectEpicsQueueState): ProjectEpicsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
