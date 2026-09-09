export type WorkflowDagTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagTransactionStateMachine {
  private allowedTransitions: Record<WorkflowDagTransactionState, WorkflowDagTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagTransactionState, to: WorkflowDagTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagTransactionState, to: WorkflowDagTransactionState): WorkflowDagTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
