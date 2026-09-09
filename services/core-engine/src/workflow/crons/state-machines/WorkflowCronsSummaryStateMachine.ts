export type WorkflowCronsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsSummaryStateMachine {
  private allowedTransitions: Record<WorkflowCronsSummaryState, WorkflowCronsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsSummaryState, to: WorkflowCronsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsSummaryState, to: WorkflowCronsSummaryState): WorkflowCronsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
