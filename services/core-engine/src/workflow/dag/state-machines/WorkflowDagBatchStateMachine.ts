export type WorkflowDagBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagBatchStateMachine {
  private allowedTransitions: Record<WorkflowDagBatchState, WorkflowDagBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagBatchState, to: WorkflowDagBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagBatchState, to: WorkflowDagBatchState): WorkflowDagBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagBatch: " + from + " -> " + to);
    }
    return to;
  }
}
