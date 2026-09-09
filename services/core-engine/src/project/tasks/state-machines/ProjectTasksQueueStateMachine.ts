export type ProjectTasksQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksQueueStateMachine {
  private allowedTransitions: Record<ProjectTasksQueueState, ProjectTasksQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksQueueState, to: ProjectTasksQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksQueueState, to: ProjectTasksQueueState): ProjectTasksQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksQueue: " + from + " -> " + to);
    }
    return to;
  }
}
