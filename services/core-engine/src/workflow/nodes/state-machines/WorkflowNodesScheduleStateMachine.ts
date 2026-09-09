export type WorkflowNodesScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesScheduleStateMachine {
  private allowedTransitions: Record<WorkflowNodesScheduleState, WorkflowNodesScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesScheduleState, to: WorkflowNodesScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesScheduleState, to: WorkflowNodesScheduleState): WorkflowNodesScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
