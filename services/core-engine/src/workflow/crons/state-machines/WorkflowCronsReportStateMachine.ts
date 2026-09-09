export type WorkflowCronsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsReportStateMachine {
  private allowedTransitions: Record<WorkflowCronsReportState, WorkflowCronsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsReportState, to: WorkflowCronsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsReportState, to: WorkflowCronsReportState): WorkflowCronsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsReport: " + from + " -> " + to);
    }
    return to;
  }
}
