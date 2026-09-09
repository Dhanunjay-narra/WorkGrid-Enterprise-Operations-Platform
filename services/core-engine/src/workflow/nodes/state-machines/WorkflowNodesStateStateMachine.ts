export type WorkflowNodesStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesStateStateMachine {
  private allowedTransitions: Record<WorkflowNodesStateState, WorkflowNodesStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesStateState, to: WorkflowNodesStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesStateState, to: WorkflowNodesStateState): WorkflowNodesStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesState: " + from + " -> " + to);
    }
    return to;
  }
}
