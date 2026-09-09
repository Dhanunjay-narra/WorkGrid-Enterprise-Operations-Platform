export type WorkflowCronsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsNodeStateMachine {
  private allowedTransitions: Record<WorkflowCronsNodeState, WorkflowCronsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsNodeState, to: WorkflowCronsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsNodeState, to: WorkflowCronsNodeState): WorkflowCronsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsNode: " + from + " -> " + to);
    }
    return to;
  }
}
