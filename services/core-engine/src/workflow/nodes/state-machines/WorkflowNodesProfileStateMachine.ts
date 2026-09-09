export type WorkflowNodesProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesProfileStateMachine {
  private allowedTransitions: Record<WorkflowNodesProfileState, WorkflowNodesProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesProfileState, to: WorkflowNodesProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesProfileState, to: WorkflowNodesProfileState): WorkflowNodesProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesProfile: " + from + " -> " + to);
    }
    return to;
  }
}
