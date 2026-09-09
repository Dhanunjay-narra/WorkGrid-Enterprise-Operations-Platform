export type WorkflowExecutionsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowExecutionsAssignmentStateMachine {
  private allowedTransitions: Record<WorkflowExecutionsAssignmentState, WorkflowExecutionsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowExecutionsAssignmentState, to: WorkflowExecutionsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowExecutionsAssignmentState, to: WorkflowExecutionsAssignmentState): WorkflowExecutionsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowExecutionsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
