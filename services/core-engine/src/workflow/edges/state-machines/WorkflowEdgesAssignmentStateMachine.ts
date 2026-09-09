export type WorkflowEdgesAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowEdgesAssignmentStateMachine {
  private allowedTransitions: Record<WorkflowEdgesAssignmentState, WorkflowEdgesAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowEdgesAssignmentState, to: WorkflowEdgesAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowEdgesAssignmentState, to: WorkflowEdgesAssignmentState): WorkflowEdgesAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowEdgesAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
