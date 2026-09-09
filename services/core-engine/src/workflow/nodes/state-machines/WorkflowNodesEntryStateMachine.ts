export type WorkflowNodesEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesEntryStateMachine {
  private allowedTransitions: Record<WorkflowNodesEntryState, WorkflowNodesEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesEntryState, to: WorkflowNodesEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesEntryState, to: WorkflowNodesEntryState): WorkflowNodesEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesEntry: " + from + " -> " + to);
    }
    return to;
  }
}
