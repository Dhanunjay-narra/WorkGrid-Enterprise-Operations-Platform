export type WorkflowDagRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagRecordStateMachine {
  private allowedTransitions: Record<WorkflowDagRecordState, WorkflowDagRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagRecordState, to: WorkflowDagRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagRecordState, to: WorkflowDagRecordState): WorkflowDagRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagRecord: " + from + " -> " + to);
    }
    return to;
  }
}
