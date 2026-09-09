export type WorkflowCronsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsMappingStateMachine {
  private allowedTransitions: Record<WorkflowCronsMappingState, WorkflowCronsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsMappingState, to: WorkflowCronsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsMappingState, to: WorkflowCronsMappingState): WorkflowCronsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
