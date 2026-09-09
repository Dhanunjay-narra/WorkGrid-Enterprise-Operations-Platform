export type WorkflowNodesQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesQueueStateMachine {
  private allowedTransitions: Record<WorkflowNodesQueueState, WorkflowNodesQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesQueueState, to: WorkflowNodesQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesQueueState, to: WorkflowNodesQueueState): WorkflowNodesQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesQueue: " + from + " -> " + to);
    }
    return to;
  }
}
