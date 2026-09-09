export type WorkflowVariablesScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowVariablesScheduleStateMachine {
  private allowedTransitions: Record<WorkflowVariablesScheduleState, WorkflowVariablesScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowVariablesScheduleState, to: WorkflowVariablesScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowVariablesScheduleState, to: WorkflowVariablesScheduleState): WorkflowVariablesScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowVariablesSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
