export type IotCommandsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsRecordStateMachine {
  private allowedTransitions: Record<IotCommandsRecordState, IotCommandsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsRecordState, to: IotCommandsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsRecordState, to: IotCommandsRecordState): IotCommandsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
