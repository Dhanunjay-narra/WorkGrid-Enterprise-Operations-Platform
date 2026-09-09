export type WorkflowNodesTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesTaskStateMachine {
  private allowedTransitions: Record<WorkflowNodesTaskState, WorkflowNodesTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesTaskState, to: WorkflowNodesTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesTaskState, to: WorkflowNodesTaskState): WorkflowNodesTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesTask: " + from + " -> " + to);
    }
    return to;
  }
}
