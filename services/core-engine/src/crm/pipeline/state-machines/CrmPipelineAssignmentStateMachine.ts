export type CrmPipelineAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineAssignmentStateMachine {
  private allowedTransitions: Record<CrmPipelineAssignmentState, CrmPipelineAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineAssignmentState, to: CrmPipelineAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineAssignmentState, to: CrmPipelineAssignmentState): CrmPipelineAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
