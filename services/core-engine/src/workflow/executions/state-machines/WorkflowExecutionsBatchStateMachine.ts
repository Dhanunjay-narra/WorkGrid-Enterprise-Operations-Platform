export type WorkflowExecutionsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowExecutionsBatchStateMachine {
  private allowedTransitions: Record<WorkflowExecutionsBatchState, WorkflowExecutionsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowExecutionsBatchState, to: WorkflowExecutionsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowExecutionsBatchState, to: WorkflowExecutionsBatchState): WorkflowExecutionsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowExecutionsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
