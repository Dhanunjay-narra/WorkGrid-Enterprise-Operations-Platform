export type WorkflowDagPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagPolicyStateMachine {
  private allowedTransitions: Record<WorkflowDagPolicyState, WorkflowDagPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagPolicyState, to: WorkflowDagPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagPolicyState, to: WorkflowDagPolicyState): WorkflowDagPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
