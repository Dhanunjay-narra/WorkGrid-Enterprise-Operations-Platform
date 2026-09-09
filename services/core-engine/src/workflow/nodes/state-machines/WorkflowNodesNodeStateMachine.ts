export type WorkflowNodesNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesNodeStateMachine {
  private allowedTransitions: Record<WorkflowNodesNodeState, WorkflowNodesNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesNodeState, to: WorkflowNodesNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesNodeState, to: WorkflowNodesNodeState): WorkflowNodesNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesNode: " + from + " -> " + to);
    }
    return to;
  }
}
