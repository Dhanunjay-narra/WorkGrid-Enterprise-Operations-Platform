export type IotCommandsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsScheduleStateMachine {
  private allowedTransitions: Record<IotCommandsScheduleState, IotCommandsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsScheduleState, to: IotCommandsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsScheduleState, to: IotCommandsScheduleState): IotCommandsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
