export type WorkflowNodesSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesSessionStateMachine {
  private allowedTransitions: Record<WorkflowNodesSessionState, WorkflowNodesSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesSessionState, to: WorkflowNodesSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesSessionState, to: WorkflowNodesSessionState): WorkflowNodesSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesSession: " + from + " -> " + to);
    }
    return to;
  }
}
