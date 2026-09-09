export type ProjectCapacityQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityQueueStateMachine {
  private allowedTransitions: Record<ProjectCapacityQueueState, ProjectCapacityQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityQueueState, to: ProjectCapacityQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityQueueState, to: ProjectCapacityQueueState): ProjectCapacityQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityQueue: " + from + " -> " + to);
    }
    return to;
  }
}
