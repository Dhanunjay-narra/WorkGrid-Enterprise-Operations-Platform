export type WorkflowVariablesSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowVariablesSessionStateMachine {
  private allowedTransitions: Record<WorkflowVariablesSessionState, WorkflowVariablesSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowVariablesSessionState, to: WorkflowVariablesSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowVariablesSessionState, to: WorkflowVariablesSessionState): WorkflowVariablesSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowVariablesSession: " + from + " -> " + to);
    }
    return to;
  }
}
