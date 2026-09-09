export type ProjectKanbanTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanTransactionStateMachine {
  private allowedTransitions: Record<ProjectKanbanTransactionState, ProjectKanbanTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanTransactionState, to: ProjectKanbanTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanTransactionState, to: ProjectKanbanTransactionState): ProjectKanbanTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
