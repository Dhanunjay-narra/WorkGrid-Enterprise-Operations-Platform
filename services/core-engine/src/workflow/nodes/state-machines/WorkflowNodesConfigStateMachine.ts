export type WorkflowNodesConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesConfigStateMachine {
  private allowedTransitions: Record<WorkflowNodesConfigState, WorkflowNodesConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesConfigState, to: WorkflowNodesConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesConfigState, to: WorkflowNodesConfigState): WorkflowNodesConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesConfig: " + from + " -> " + to);
    }
    return to;
  }
}
