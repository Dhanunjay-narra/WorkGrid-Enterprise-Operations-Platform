export type WorkflowNodesMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesMappingStateMachine {
  private allowedTransitions: Record<WorkflowNodesMappingState, WorkflowNodesMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesMappingState, to: WorkflowNodesMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesMappingState, to: WorkflowNodesMappingState): WorkflowNodesMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesMapping: " + from + " -> " + to);
    }
    return to;
  }
}
