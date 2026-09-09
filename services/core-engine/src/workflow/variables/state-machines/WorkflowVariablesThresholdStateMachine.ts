export type WorkflowVariablesThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowVariablesThresholdStateMachine {
  private allowedTransitions: Record<WorkflowVariablesThresholdState, WorkflowVariablesThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowVariablesThresholdState, to: WorkflowVariablesThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowVariablesThresholdState, to: WorkflowVariablesThresholdState): WorkflowVariablesThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowVariablesThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
