export type ProjectTasksTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksTransactionStateMachine {
  private allowedTransitions: Record<ProjectTasksTransactionState, ProjectTasksTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksTransactionState, to: ProjectTasksTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksTransactionState, to: ProjectTasksTransactionState): ProjectTasksTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
