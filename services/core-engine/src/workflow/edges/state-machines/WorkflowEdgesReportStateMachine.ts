export type WorkflowEdgesReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowEdgesReportStateMachine {
  private allowedTransitions: Record<WorkflowEdgesReportState, WorkflowEdgesReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowEdgesReportState, to: WorkflowEdgesReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowEdgesReportState, to: WorkflowEdgesReportState): WorkflowEdgesReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowEdgesReport: " + from + " -> " + to);
    }
    return to;
  }
}
