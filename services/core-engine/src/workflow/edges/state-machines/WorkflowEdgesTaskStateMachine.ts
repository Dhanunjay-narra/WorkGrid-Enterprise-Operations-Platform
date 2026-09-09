export type WorkflowEdgesTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowEdgesTaskStateMachine {
  private allowedTransitions: Record<WorkflowEdgesTaskState, WorkflowEdgesTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowEdgesTaskState, to: WorkflowEdgesTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowEdgesTaskState, to: WorkflowEdgesTaskState): WorkflowEdgesTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowEdgesTask: " + from + " -> " + to);
    }
    return to;
  }
}
