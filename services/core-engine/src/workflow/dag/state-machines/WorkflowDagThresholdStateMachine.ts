export type WorkflowDagThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagThresholdStateMachine {
  private allowedTransitions: Record<WorkflowDagThresholdState, WorkflowDagThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagThresholdState, to: WorkflowDagThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagThresholdState, to: WorkflowDagThresholdState): WorkflowDagThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
