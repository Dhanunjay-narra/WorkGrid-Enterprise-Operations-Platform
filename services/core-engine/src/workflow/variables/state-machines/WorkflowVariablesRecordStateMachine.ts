export type WorkflowVariablesRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowVariablesRecordStateMachine {
  private allowedTransitions: Record<WorkflowVariablesRecordState, WorkflowVariablesRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowVariablesRecordState, to: WorkflowVariablesRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowVariablesRecordState, to: WorkflowVariablesRecordState): WorkflowVariablesRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowVariablesRecord: " + from + " -> " + to);
    }
    return to;
  }
}
