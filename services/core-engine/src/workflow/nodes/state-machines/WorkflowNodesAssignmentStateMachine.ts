export type WorkflowNodesAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesAssignmentStateMachine {
  private allowedTransitions: Record<WorkflowNodesAssignmentState, WorkflowNodesAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesAssignmentState, to: WorkflowNodesAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesAssignmentState, to: WorkflowNodesAssignmentState): WorkflowNodesAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
