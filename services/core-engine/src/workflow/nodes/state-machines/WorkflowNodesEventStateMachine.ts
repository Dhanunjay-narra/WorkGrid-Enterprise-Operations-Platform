export type WorkflowNodesEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesEventStateMachine {
  private allowedTransitions: Record<WorkflowNodesEventState, WorkflowNodesEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesEventState, to: WorkflowNodesEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesEventState, to: WorkflowNodesEventState): WorkflowNodesEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesEvent: " + from + " -> " + to);
    }
    return to;
  }
}
