export type WorkflowNodesReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesReportStateMachine {
  private allowedTransitions: Record<WorkflowNodesReportState, WorkflowNodesReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesReportState, to: WorkflowNodesReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesReportState, to: WorkflowNodesReportState): WorkflowNodesReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesReport: " + from + " -> " + to);
    }
    return to;
  }
}
