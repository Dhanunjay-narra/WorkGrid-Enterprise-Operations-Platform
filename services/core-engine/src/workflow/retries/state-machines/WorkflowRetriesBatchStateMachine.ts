export type WorkflowRetriesBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowRetriesBatchStateMachine {
  private allowedTransitions: Record<WorkflowRetriesBatchState, WorkflowRetriesBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowRetriesBatchState, to: WorkflowRetriesBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowRetriesBatchState, to: WorkflowRetriesBatchState): WorkflowRetriesBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowRetriesBatch: " + from + " -> " + to);
    }
    return to;
  }
}
