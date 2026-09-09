export type WorkflowCronsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsStateStateMachine {
  private allowedTransitions: Record<WorkflowCronsStateState, WorkflowCronsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsStateState, to: WorkflowCronsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsStateState, to: WorkflowCronsStateState): WorkflowCronsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsState: " + from + " -> " + to);
    }
    return to;
  }
}
