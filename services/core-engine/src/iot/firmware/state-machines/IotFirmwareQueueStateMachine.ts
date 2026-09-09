export type IotFirmwareQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareQueueStateMachine {
  private allowedTransitions: Record<IotFirmwareQueueState, IotFirmwareQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareQueueState, to: IotFirmwareQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareQueueState, to: IotFirmwareQueueState): IotFirmwareQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareQueue: " + from + " -> " + to);
    }
    return to;
  }
}
