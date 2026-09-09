export type ProjectGanttPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttPayloadStateMachine {
  private allowedTransitions: Record<ProjectGanttPayloadState, ProjectGanttPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttPayloadState, to: ProjectGanttPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttPayloadState, to: ProjectGanttPayloadState): ProjectGanttPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttPayload: " + from + " -> " + to);
    }
    return to;
  }
}
