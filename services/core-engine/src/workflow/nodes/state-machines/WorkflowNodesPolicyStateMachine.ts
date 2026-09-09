export type WorkflowNodesPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesPolicyStateMachine {
  private allowedTransitions: Record<WorkflowNodesPolicyState, WorkflowNodesPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesPolicyState, to: WorkflowNodesPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesPolicyState, to: WorkflowNodesPolicyState): WorkflowNodesPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
