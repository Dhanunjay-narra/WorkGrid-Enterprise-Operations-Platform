export type WorkflowNodesItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesItemStateMachine {
  private allowedTransitions: Record<WorkflowNodesItemState, WorkflowNodesItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesItemState, to: WorkflowNodesItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesItemState, to: WorkflowNodesItemState): WorkflowNodesItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesItem: " + from + " -> " + to);
    }
    return to;
  }
}
