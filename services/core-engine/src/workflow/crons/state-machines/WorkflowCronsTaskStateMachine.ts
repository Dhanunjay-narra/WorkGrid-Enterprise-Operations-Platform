export type WorkflowCronsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsTaskStateMachine {
  private allowedTransitions: Record<WorkflowCronsTaskState, WorkflowCronsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsTaskState, to: WorkflowCronsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsTaskState, to: WorkflowCronsTaskState): WorkflowCronsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsTask: " + from + " -> " + to);
    }
    return to;
  }
}
