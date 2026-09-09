export type WorkflowCronsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsEntryStateMachine {
  private allowedTransitions: Record<WorkflowCronsEntryState, WorkflowCronsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsEntryState, to: WorkflowCronsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsEntryState, to: WorkflowCronsEntryState): WorkflowCronsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
