export type ProjectSprintsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsQueueStateMachine {
  private allowedTransitions: Record<ProjectSprintsQueueState, ProjectSprintsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsQueueState, to: ProjectSprintsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsQueueState, to: ProjectSprintsQueueState): ProjectSprintsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
