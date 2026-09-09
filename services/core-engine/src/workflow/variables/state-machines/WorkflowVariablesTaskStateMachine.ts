export type WorkflowVariablesTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowVariablesTaskStateMachine {
  private allowedTransitions: Record<WorkflowVariablesTaskState, WorkflowVariablesTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowVariablesTaskState, to: WorkflowVariablesTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowVariablesTaskState, to: WorkflowVariablesTaskState): WorkflowVariablesTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowVariablesTask: " + from + " -> " + to);
    }
    return to;
  }
}
