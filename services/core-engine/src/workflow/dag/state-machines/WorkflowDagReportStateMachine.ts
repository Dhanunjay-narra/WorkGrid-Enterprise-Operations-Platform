export type WorkflowDagReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagReportStateMachine {
  private allowedTransitions: Record<WorkflowDagReportState, WorkflowDagReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagReportState, to: WorkflowDagReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagReportState, to: WorkflowDagReportState): WorkflowDagReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagReport: " + from + " -> " + to);
    }
    return to;
  }
}
